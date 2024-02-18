import { h, FunctionalComponent } from "preact"

const KeyMenu: FunctionalComponent = () => {
    return (
        <div>
            <div id="key-mainframe" className="flex items-center justify-center">
                <div className="absolute bg-white p-8 shadow-lg rounded-lg w-2/3 h-[40vh]">
                    <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-blue-500 hover:underline">Item 1</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-blue-500 hover:underline">Item 2</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-blue-500 hover:underline">Item 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default KeyMenu
