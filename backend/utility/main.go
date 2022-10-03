package main

import (
	//"cloud.google.com/go/firestore"
	"context"
	"encoding/json"
	firebase "firebase.google.com/go"
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
	"io/ioutil"
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
	var tempmail = req.Form.Get("email")
	fmt.Fprint(res, tempmail)

}

type TempData struct {
	first_name string `json:"first_name"`
	last_name  string `json:"last_name"`
	email_id   string `json:"email_id"`
	password   string `json:"password"`
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

	m, err := client.Collection("users").Doc(tempd.email_id).Get(ctx)
	if err != nil {
		_, err := client.Collection("users").Doc(req.FormValue(tempd.email_id)).Set(ctx, map[string]interface{}{
			"fname":    string(req.FormValue(tempd.first_name)),
			"lname":    string(req.FormValue(tempd.last_name)),
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
