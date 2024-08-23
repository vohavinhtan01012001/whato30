import React from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            <div>
                <Header />
            </div>
            <div className="pt-[80px]">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout