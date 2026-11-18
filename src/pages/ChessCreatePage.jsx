import { useNavigate } from "react-router-dom";
import axios from "axios";,

export const ChessCreatePage = () => {
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try
        {
            await axios.post("https://chess.sulla.hu/chess",{
                name: event.target.elements.name.value,
                birth_date:event.target.elements.birth_date.value,
                world_ch_won: event.target.elements.world_ch_won.value,
                profile_url:event.target.elements.profile_url.value,
                image_url: event.target.elements.image_url.value
            })
            navigate("/")
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
    return (
        <div className="p-5 content bg-ivory text-center">
            <h2>Új sakkozó</h2>
            <form onSubmit="{handleSubmit}">
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="name" className="form-control" />
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="number" className="form-control"/>
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="number" className="form-control" />
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="text" name="profil url" className="form-control" />
                    </div>
                </div>
                <div className="from-group row pb-3">
                    <label className="col-sm-3 col-form-lable">Sakkozó neve</label>
                    <div>
                        <input type="text" name="kep" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    );
}