

export async function get<A>(key:string) {
    const res = await fetch("/api/kv/get",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({key})
    })
    const body = await res.json()
    return body as A
}
export async function put(key:string,value:any) {
    await fetch("/api/kv/put",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({key,value})
    })
}
export async function remove<A>(key:string) {
    await fetch("/api/kv/remove",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({key})
    })
} 