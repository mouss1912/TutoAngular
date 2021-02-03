export class AuthService{
    isAuth = false;
//le promise c'est un methode asynchrone :  qui se résout ici au bout de 2 secondes
    signIn(){
        return new Promise(
            (resolve,reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 2000
                );
            }
        );
    }

    signOut(){
        this.isAuth = false;
    }
}