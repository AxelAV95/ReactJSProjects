import { Manga } from "./Manga";

export interface InitialState{
    cartItems: Manga[],
    quantity: number,
    total: number
}