export default function Header() {
    return (
        <div className="fixed z-50 w-full p-2 flex flex-row justify-between text-white backdrop-blur-sm py-2 px-5">
            <div>
                <h1 className="text-lg font-bold">Class Men's Collection</h1>
            </div>
            <div className="flex flex-row gap-3 text-[17px]">
                <div>
                    Products
                </div>
                <div>
                    About-Us
                </div>
                <div>
                    Contact-Us
                </div>
            </div>
        </div>
    );
}