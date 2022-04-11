import React, { useState, useEffect } from 'react' 
import { PostModal } from './PostModal';

export function Termekeklist()
{
    const[termekek, setTermekek] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:5001/termekek")
            .then((res) => res.json())
            .then((termekek) => setTermekek(termekek))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);

    return(
        <div className="p5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
              <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Termékek:</h2>
                    {termekek.map((termekek) => (
                        <div key={termekek.id} className="card col-sm-3 d-inline-block m-1 p-2">
                         <h6 className="text-muted" >{termekek.nev}</h6>
                         <div>{termekek.leiras}</div>
                         <div>{termekek.ar} Ft -</div>
                         <div className="card-body">
                             <img alt={`Image Not Found: ${termekek.nev}`}
                                className="img-fluid"
                                style={{maxHeight: 200}}
                                src={`https:/localhost:5001/img/${termekek.kep}` ? `https:/localhost:5001/img/${termekek.kep}` : "https://via.placeholder.com/400x800"}
                                />
                         </div>

                         <div className='card-footer'>
                            <PostModal id={termekek.id} ar={termekek.ar} nev={termekek.nev} keplink={termekek.kep}></PostModal>
                         </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
