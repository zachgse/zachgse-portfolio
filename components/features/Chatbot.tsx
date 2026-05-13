"use client"
import { generateAugmentedRetrieval } from "@/utils/chat";
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
    const bottomRef = React.useRef<HTMLDivElement|null>(null);
    const {
        reset,
        handleSubmit,
        register,
        formState:{errors}
    } = useForm<Inputs>();
    const [loading,setLoading] = React.useState<boolean>(false);
    const [error,setError] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    },[history,loading]);

    const onSubmit:SubmitHandler<Inputs> = async(data) => {
        reset();
        const newMessage = formatMessage({role:"user",message:data.message});
        setHistory(prev=>[...prev,newMessage]);
        try {
            setLoading(true);
            const response = await fetch("/api/google",{
                method:"POST",
                body:JSON.stringify(data.message)
            });
            if (!response.ok) setError(true);
            const result = await response.json();
            const modelMessage = formatMessage({role:"model",message:result.message});
            setHistory(prev=>[...prev,modelMessage]);
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setLoading(false);
        }
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
                    className="absolute bottom-12 right-2 bg-white dark:bg-[#212121] border border-gray-300 dark:border-[#212121] rounded-lg 
                            md:w-96 w-[342px] md:h-[500px] h-[450px] text-black dark:text-white px-4 pt-6 pb-4 cursor-default">
                    <div onClick={()=>setIsOpen(false)} className="absolute top-2 right-2">
                            <CircleX className="text-black dark:text-white cursor-pointer" size={18}/>
                    </div>
                    {error ? (
                        <div className="h-full flex flex-col justify-center items-center text-gray-500 text-sm">
                            Something went wrong ...
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col gap-2">
                        <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                            {history.map((chat, index) => (
                                <div
                                    key={index}
                                    className={clsx(
                                        "flex w-full",
                                        chat.role === "model"
                                            ? "justify-start"
                                            : "justify-end"
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "max-w-[80%] border rounded-lg text-xs p-2",
                                            chat.role === "model"
                                                ? "border-gray-300 text-left"
                                                : "border-info bg-info text-right text-white"
                                        )}
                                    >
                                        {chat.message}
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start">
                                    <Comment
                                        visible={true}
                                        height="28"
                                        width="28"
                                        ariaLabel="comment-loading"
                                        color="black"
                                        backgroundColor="#e1e1e1"
                                    />
                                </div>
                            )}

                            <div ref={bottomRef} />
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
                    )}
                    {!error && (
                        <p className="w-full absolute bottom-1 text-center text-gray-500 text-[10px]">AI-powered chatbot with Google Gemini</p>
                    )}
                </div>
            )}

        </div>
    )
}

export default Chatbot;