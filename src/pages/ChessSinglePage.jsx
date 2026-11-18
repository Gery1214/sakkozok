import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

export const ChessSinglePage = () => {
    const params = useParams();
    const id = params.chess.Id;
    const [chess,setChess] = useState([]);
    const [isPending, setPeinding] = useState(false);

        useEffect(() => {
        setFetchPending(true);
        axios.get(`https://chess.sulla.hu/chess/{$id}`)
            .then((res) => setChesses(res.data))
            .catch((error) => {
                setHiba(error);
                console.error("Hiba: ", error);
            })
            .finally(() => setFetchPending(false));
    }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border text-warning"></div>
            ) : (
                <div>
                    <h2>Sakkozók</h2>
                    {chesses.map((chess, index) => (
                        <div className="card p-3">
                            <p className="text-dark">Sakkozó neve: {chess.name}</p>
                            <p className="text-danger">Születési éve: {chess.birth_date}</p>
                            <p className="text-danger">Nyert világbajnokságok: {chess.world_ch_won}</p>
                            <div className="card-body">
                                <Link to={chess.profile_url}>Profile link</Link><br />
                                <Link to={"/" + chess.id}>
                                    <img 
                                        alt={chess.name} 
                                        className="img-fluid" 
                                        style={{ maxHeight: 200 }} 
                                        src={chess.image_url || "https://placehold.co"} 
                                    />
                                </Link>
                                <br />
                                <Link to={"/mod-chess/" + chess.id}><i className="bi bi-pencil"></i></Link>
                                <Link to={"/del-chess/" + chess.id}><i className="bi bi-trash3"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}