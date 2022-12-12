use rocket::{serde::json::Json, State};
use meilisearch_sdk::Client;
use serde::{Serialize, Deserialize};

#[macro_use] extern crate rocket;

#[derive(Serialize)]
pub struct ResponseType {
    error: bool,
    message: String
}

#[derive(Deserialize)]
pub struct Contact {

}

#[post("/thank/<id>")]
pub async fn thank(id: String, client: &State<Client>) -> Json<ResponseType> {
    let resp = client.get_index("requests")
        .await
        .unwrap()
        .get_document::<Contact>(&id)
        .await;

    if resp.is_err() {
        Json(ResponseType {
            error: true,
            message: "Successfully sent".to_string()
        })
    } else {
        Json(ResponseType {
            error: false,
            message: "Successfully sent".to_string()
        })
    }
}

#[launch]
fn rocket() -> _ {
    let client = Client::new("https://ms-ce712af3e579-1066.sgp.meilisearch.io", "62868de677f695cea33989fbfdb09525180ff3b6");

    rocket::build()
        .manage(client)
        .mount("/" , routes![thank])
}
