import config from "../config";


// VIEW ALL SONGS API CALL
export async function index() {
    const res = await fetch(config.BASE_URL, { method: "GET" });

  if (res.ok) {
    return res.json();
  } else {
    //future update - error construction funciton -> JS cause, message
  }
}

// CREATE SONG API CALL
export async function create(data){
    try {
        const clientData = JSON.stringify(data)

        const res = await fetch(config.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: clientData
        })
        if (res.ok) {
            return res.json() //the promise of the data conversion
        }else {
            throw new Error("Invalid Request")
        }
    } catch (err) {
        throw new Error('Invalid Request')
    }
}