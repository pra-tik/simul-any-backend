package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func indexHandler(res http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(res, "Welcome to Lab Service")

}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", indexHandler)
	log.Fatal(http.ListenAndServe(":8080", r))
}
