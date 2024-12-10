// import Container from "./Container"

import { Button } from "@headlessui/react"
import { en, logo } from "../assets"
import Link from "next/link"


const Navbar = () => {
  return (
    <div>
        {/* <Container> */}
            <div className="flex flex-row w-full p-5 justify-center align-center">
                {/* login btn */}
                <div className="flex flex-row">
                    <Button className="bg-[#543883] text-white p-2.5 rounded-lg mr-3 ">الدخول / إنشاء حساب</Button>
                    <Button className="bg-[#fffeff] text-orange-400 p-2.5 rounded-lg border-[#FFA360] border-2 flex items-center justify-between">
                        <img src={en} alt="" /> ENG  </Button>

                </div>
                {/* lists links */}
                <div className="flex flex-row px-40 justify-center mt-2 ">
                    <ul className="pr-10">تواصل معنا</ul>
                    <ul className="pr-10">تطبيق الجوال</ul>
                    <ul className="pr-10">الصفقات</ul>
                    <ul className="pr-10" > الكوبونات</ul>
                    <ul className="pr-10"> العلامات التجارية</ul>
                    <ul className="pr-10"> الفئات</ul>
                    <ul className="pr-10"> الرئيسية</ul>

                </div>
                    <div>
                    <img src={logo} className="w-15" alt="" />
                    </div>
            </div>
        {/* </Container> */}
    </div>
  )
}

export default Navbar