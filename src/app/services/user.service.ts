
import { Subject } from 'rxjs';
import { User } from '../models/User.model';


export class UserService {
    // création d'un user rempli
    //private users: User[];
    // création d'un user rempli : exemple
    private users: User[] = [
        new User('Mouss', 'Smb', 'mouss@email.com', 'coca ', ['coder', 'foot'])
    ];
    // private users: User [] = [
    //     {
    //         firstName : 'Mouss',
    //         lastName : 'Smb',
    //         email : 'mouss@email.com',
    //         drinkPreference : 'coca',
    //         hobbies : [
    //             'coder',
    //             'foot'
    //         ]
    //     }
    // ]

    // userSubject emmettra des array de type User
    userSubject = new Subject<User[]>();

    // Crée une copie du Uer qu'on reçoi
    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    // Pour ajouter un User
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

}