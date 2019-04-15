package models

// Response represents response JSON body from Facebook
type Response struct {
	Datas []Data `json:"data"`
}
