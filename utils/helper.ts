import { Chat } from "./types";

export function formatDate(date:string) {
    return new Date(date).toLocaleDateString("en-US",{
        year: "numeric",
        month: "long"
    });
}

export function formatMessage({role,message}:Chat) {
    return {
        role:role,
        message:message
    }
}