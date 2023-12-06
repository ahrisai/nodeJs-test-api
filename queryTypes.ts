export interface Post{
    id?:number,
    userId:number,
    title:string,
    content:string,
    description?:string
}

export interface User{
    id?:number,
    name:string,
    age:number,
    posts?:Post[]
}

// model User {
//     id    Int    @id @default(autoincrement())
//     name  String
//     age   Int
//     posts    Post[] 
//   }
  