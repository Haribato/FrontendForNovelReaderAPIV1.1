import { IBook } from "./IBook"

export interface IPagedBooks {
    count:number
    next:string | null
    previous:string | null
    results: IBook[]
}
