"use client";
import { useState } from "react";

const page = () => {
    const [url, setUrl] = useState("");
    const [generatedUrl, setGeneratedUrl] = useState("");
    const [copied, setCopied] = useState(false);
    
    const randomStringGenerator = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const length = 8;
        let result = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (!isValidUrl(url)) {
            alert("Please enter a valid URL");
            return;
        }
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const randomString = randomStringGenerator();
        const newGeneratedUrl = `${process.env.NEXT_PUBLIC_HOST}/${randomString}`;
        
        setGeneratedUrl(newGeneratedUrl);

        const raw = JSON.stringify({
            url: url,
            generatedUrl: newGeneratedUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl("");
            })
            .catch((error) => console.error("error:", error));
    };

    return (
        <div className="flex flex-col items-center h-[80vh] w-[80%] mx-auto justify-evenly">
            <div className="text-[60px] font-[900] text-[#3d3d3d] text-center">
                Shorten your URLs <br /> with simple and easy
            </div>

            <div className="flex flex-col items-center w-[60%]">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-lg text-[#3d3d3d]">
                        Just paste your link
                    </p>
                    <svg
                        className="w-6 h-6 text-[#3d3d3d]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>

                <div className="flex items-center justify-center w-full gap-4 mt-4">
                    <form className="w-full flex justify-center items-center gap-4">
                        <input
                            type="text"
                            placeholder="Enter your URL here"
                            className="flex-1 px-4 py-4 text-sm border-[2.5px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7b9b] focus:border-transparent"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            onClick={(e) => submitHandler(e)}
                            type="submit"
                            className="px-8 py-4 text-sm font-bold bg-[#ff7b9b] text-black rounded-md border-[2.5px] border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap">
                            Shorten
                        </button>
                    </form>
                </div>

                {generatedUrl && (
                    <>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <a
                                href={generatedUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-[#3d3d3d] hover:text-[#ff7b9b] transition-colors">
                                {generatedUrl}
                            </a>
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(generatedUrl);
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    }}
                                    className="p-2 text-sm font-bold bg-[#ff7b9b] text-black rounded-md border-[2.5px] border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                        />
                                    </svg>
                                </button>
                                {copied && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap transition-opacity duration-200 opacity-100">
                                        Copied!
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default page;
