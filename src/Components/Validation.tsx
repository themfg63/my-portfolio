const validateForm=(id:string, value:any) => {
    switch(id){
        case 'name':
            if(value.length === 0)return "Ad Soyad Boş Bırakılamaz.";
            if(value.length < 3)return "Ad Soyad en az 3 karakterden oluşmalıdır.";
            return "";
        case 'email':
            if(value.length===0)return "Email boş bırakılamaz.";
            if(!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value))return "Geçersiz Email adresi.";
            return "";
        case 'phone':
            if(value.length === 0) return "Telefon No boş bıkarılamaz.";
            if(!/^[0-9]*$/.test(value))return "Geçersiz Telefon numarası.";
            if(value.length!==10)return "Telefon numaranızı başında 0 olmadan 10 haneli olarak giriniz.";
            return "";
        case 'message':
            if(value.length===0)return "Mesaj kutusu boş bırakılamaz.";
            return "";
        default:
            return "";
    }
}

export {validateForm}