
export default function StandMain( props ) {

    const jsonObj = {
        'location': props.location,
        'minCust': props.minCust,
        'maxCust': props.maxCust,
        'avg': props.avg,
    }
    const data = JSON.stringify(jsonObj)

    return (
        <main className="container w-4/5">
            <form className="container mx-auto w-4/5 bg-pink-300 p-8 mt-16 rounded-lg" onSubmit={props.handler}>
                <fieldset>
                    <div className="flex flex-col">
                        
                        <div className="text-center text-xl my-1.5">
                            {props.title}
                        </div>
                        
                        <div>
                            <div className="container mx-auto w-11/12 my-1.5" >
                                <label className="mr-8" htmlFor="location">location</label>
                                <input className="w-4/5" type="text" name="location" />
                            </div>
                        </div>
                        
                        <div className="container mx-auto w-11/12 my-1.5" >
                            
                            <div className="flex space-x-6">
                                
                                <div className="flex flex-col w-1/4 text-base text-center">
                                    <label htmlFor="minCust">Minimum Customers</label>
                                    <input type="number" name="minCust" />
                                </div>

                                <div className="flex flex-col w-1/4 text-base text-center">
                                    <label htmlFor="maxCust">Maximum Customers</label>
                                    <input type="number" name="maxCust" />
                                </div>
                                
                                <div className="flex flex-col w-1/4 text-base text-center">
                                    <label htmlFor="avg">Average Sales</label>
                                    <input type="number" step="0.01" name="avg" />
                                </div>
                                
                                <button className="bg-pink-400 w-1/4 hover:shadow-md">Create</button>
                            
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>

            <div>
                <table className="w-1/2 mx-auto border-4 border-collapse border-gray-500">
                    <thead>
                        <tr>
                            <th className="pl-2 border border-black">No.</th>
                            <th className="pl-2 border border-black">Location</th>
                            <th className="pl-2 border border-black">Minimum Customers</th>
                            <th className="pl-2 border border-black">Maximum Customers</th>
                            <th className="pl-2 border border-black">Average Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.createCookieHandler.map(item =>{
                            <tr className="odd:bg-red-400" key={item.id}>
                                <td className="pl-2 border border-black">{item.id}</td>
                                <td className="pl-2 border border-black">{item.location}</td>
                                <td className="pl-2 border border-black">{item.min}</td>
                                <td className="pl-2 border border-black">{item.max}</td>
                                <td className="pl-2 border border-black">{item.avg}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    );

}
