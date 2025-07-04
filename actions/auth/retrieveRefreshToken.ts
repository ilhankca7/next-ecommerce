"use server"

import { cookies } from "next/headers"

export default async function retrieveRefreshToken(){
    const cookieStore = await cookies();
    return cookieStore.get("refresh_token")?.value;
}

//Amacı: Daha önce çerez olarak kaydedilen refresh_token'ı sunucu tarafında okumak ve geri döndürmek.
//aha önce kaydedilen kimlik bilgisini (refresh_token'ı) sunucu tarafında okur.