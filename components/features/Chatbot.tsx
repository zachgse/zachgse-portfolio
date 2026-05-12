"use client"
import { formatMessage } from "@/utils/helper";
import { Chat } from "@/utils/types";
import clsx from "clsx";
import { CircleX, MessageCircleMore, SendHorizontal } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Comment } from "react-loader-spinner";

type Inputs = {
    message: string
}

const Chatbot = () => {
    const [isOpen,setIsOpen] = React.useState<boolean>(false);
    const [history,setHistory] = React.useState<Chat[]>([
        {role:"model",message:"Hello this is Zach Estrella. Ask your inquiries here regarding my portfolio."}
    ]);
    const [isPending,startTransition] = React.useTransition();
    const bottomRef = React.useRef<HTMLDivElement|null>(null);
    const {
        reset,
        handleSubmit,
        register,
        formState:{errors}
    } = useForm<Inputs>();
    
    React.useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    },[history,isPending]);

    const onSubmit:SubmitHandler<Inputs> = (data) => {
        reset();
        const newMessage = formatMessage({role:"user",message:data.message});
        setHistory(prev=>[...prev,newMessage]);
        startTransition(async()=>{
            await new Promise(resolve=>setTimeout(resolve,1000));
            const modelMessage = formatMessage({role:"model",message:"This feature is currently under construction."});
            setHistory(prev=>[...prev,modelMessage]);
        });
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(onSubmit)();
        }
    }

    return (
        <div onClick={() => setIsOpen(prev=>!prev)}
            className="fixed lg:bottom-8 bottom-24 right-4 z-50 bg-info text-white rounded-full h-12 w-12 flex items-center justify-center cursor-pointer">
            <MessageCircleMore />
            {isOpen && (
                <div onClick={(e)=>e.stopPropagation()}
                    className="absolute bottom-13 right-2 bg-white dark:bg-[#212121] border border-gray-300 dark:border-[#212121] rounded-lg 
                            w-96 h-96 text-black dark:text-white px-4 pt-6 pb-4 cursor-default">
                    <div onClick={()=>setIsOpen(false)} className="absolute top-2 right-2">
                            <CircleX className="text-red-500 cursor-pointer" size={18}/>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col gap-2">
                        <div className="flex flex-col gap-2 overflow-y-auto">
                            {history.map((chat,index)=>(
                                <div key={index} className="w-full">
                                <div className={clsx("max-w-4/5 border rounded-lg text-xs p-2",
                                            chat.role == "model" ? "border-gray-300 float-left text-left"
                                                                : "border-info bg-info float-right text-right text-white"
                                        )}>
                                        {chat.message}
                                    </div>
                                </div>
                            ))}
                            {isPending && <Comment
                                visible={true}
                                height="28"
                                width="28"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="black"
                                backgroundColor="#e1e1e1"
                            />}
                            <div ref={bottomRef}/>
                        </div>
                        <div className="mt-auto">
                            <textarea {...register("message", {required:"A message is required"})} onKeyDown={handleKeyDown}
                                className={clsx("border text-xs w-full h-24 p-2 overflow-y-auto pr-6",
                                     errors.message ? "border-red-500 hover:border-red-500 focus:outline-red-500"
                                                    : "border-gray-300 hover:border-gray-300 focus:outline-gray-300"
                                )}/>
                            <button type="submit">
                                <SendHorizontal className="absolute right-6 bottom-16 cursor-pointer" size={16}/>
                            </button>
                        </div>
                    </form>

                    <p className="absolute bottom-1 left-24 text-gray-500 text-[10px]">AI-powered chatbot through Google Gemini</p>
                </div>
            )}

        </div>
    )
}

export default Chatbot;