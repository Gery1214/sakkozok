import { useEffectEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const ChessModPage = () => {
    const params = useState();
    const id = params.chessId;
    const navigate = useNavigate();
    const [showModal, setShowmodal] = useState(false)
    const [chess,setChess] = useState({
        name: "",
        birth_date: 0,
        world_ch_won: 0,
        profile_url: "",
        image_url: ""
    })
    useEffectEvent(() => {
        const fetchChessData = async () => {
            try{
                const response = axios.get(`https://chess.sulla.hu/chess/${id}`);
                setChess(response.data);
            }
        }
        catch (error){
            console.log("Hiba" error);
        }
        fetchChessData();
    }) [id]);

   return (
        <div className="p-5 content bg-ivory text-center">
            <h2>Új sakkozó</h2>
            <form onSubmit="{handleSubmit}">
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="name" className="form-control" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="number" className="form-control" onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="number" className="form-control" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="text" name="profil url" className="form-control" onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="text" name="kep" className="form-control" onChange={handleInputChange}/>
                    </div>
                </div>
            </form>
        </div>

    );
}