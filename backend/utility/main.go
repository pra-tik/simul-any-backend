package main

import (
	//"cloud.google.com/go/firestore"
	"context"
	"encoding/json"
	firebase "firebase.google.com/go"
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
	"log"
	"net/http"
)

type JsonResponse struct {
	Type    string `json:"type"`
	Message string `json:"message"`
	Name    string `json:"name"`
}

func indexHandler(res http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(res, "Welcome to Utility Service\n\n")
	fmt.Fprintf(res, "Service is Running ...")

}

func loginHandler(res http.ResponseWriter, req *http.Request) {

	err := req.ParseForm()
	if err != nil {
		log.Fatal(err)
	}
	var response = JsonResponse{}
	ctx := context.Background()
	conf := &firebase.Config{ProjectID: "simulate-anything"}
	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer client.Close()

	dsnap, err := client.Collection("users").Doc(req.Form.Get("email_id")).Get(ctx)
	m := dsnap.Data()
	if err != nil {
		response = JsonResponse{Type: "failed", Message: "Invalid Credentials"}
	} else {
		val := m["password"].(string)
		if err = bcrypt.CompareHashAndPassword([]byte(val), []byte(req.Form.Get("password"))); err != nil {
			response = JsonResponse{Type: "failed", Message: "Invalid Credentials"}
		} else {
			response = JsonResponse{Type: "success", Message: "Valid Login", Name: fmt.Sprint(m["fname"])}
		}
	}

	json.NewEncoder(res).Encode(response)
}

func registerHandler(res http.ResponseWriter, req *http.Request) {
	err := req.ParseForm()
	if err != nil {
		log.Fatal(err)
	}

	var pass = req.Form.Get("password")
	fmt.Println(req.Form.Get("email_id"))
	fmt.Println(pass)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(pass), 8)
	if err != nil {
		return
	}

	ctx := context.Background()
	conf := &firebase.Config{ProjectID: "simulate-anything"}
	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		log.Fatalln(err)
	}
	var response = JsonResponse{}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer client.Close()

	m, err := client.Collection("users").Doc(req.Form.Get("email_id")).Get(ctx)
	if err != nil {
		_, err := client.Collection("users").Doc(req.FormValue("email_id")).Set(ctx, map[string]interface{}{
			"fname":    string(req.FormValue("first_name")),
			"lname":    string(req.FormValue("last_name")),
			"password": string(hashedPassword),
		})
		if err != nil {
			// Handle any errors in an appropriate way, such as returning them.
			response = JsonResponse{Type: "failed", Message: "System Error"}
			log.Printf("An error has occurred: %s", err)
		}
		fmt.Printf("Document data: %#v\n", m)
		response = JsonResponse{Type: "success", Message: "User Registered Successfully"}
	} else {
		response = JsonResponse{Type: "failed", Message: "User Already Exist"}
	}

	json.NewEncoder(res).Encode(response)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", indexHandler)
	r.HandleFunc("/login", loginHandler)
	r.HandleFunc("/register", registerHandler)
	log.Fatal(http.ListenAndServe(":8080", r))
}
