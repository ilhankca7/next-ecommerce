"use server"

import { cookies } from "next/headers"

export default async function storeRefreshToken(token:string){
    const cookieStore = await cookies();

    return cookieStore.set('refresh_token', token);
}


// Amacı: Kullanıcının tarayıcısına refresh_token isimli bir çerez (cookie) kaydetmek.
// Bu token, kullanıcının oturumda kalmasını sağlar. 
// Güvenli oturum yönetimi için kullanılır.
//Kullanıcının kimliğini (oturum bilgisini) tarayıcıya çerez olarak kaydeder.