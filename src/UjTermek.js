import { useNavigate } from "react-router-dom";

export function InstrumentCreatePage() {
    const navigate = useNavigate();
    return (
    <div className="p-5 content bg-whitesmoke text-center">
        <h2>Új Termék</h2>
        <form
            onSubmit={(e) =>{
                e.persist();
                e.preventDefault();
                fetch("https://localhost:5001/termek", {
                    headers: { 
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                    method: "POST",
                    body: JSON.stringify({
                        nev: e.target.elements.nev.value,
                        ar: e.target.elements.ar.value,
                        kep: e.target.elements.keplink.value,
                        leiras:e.target.elements.leiras.value,
                    }),
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}
        >
            <div className="from-group row pb-3">
                <label className="col-sm-3 col-form-label">Név:</label>
                <div className="col-sm-9">
                    <input type="text" name="nev" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Ár:</label>
                <div className="col-sm-9">
                    <input type="number" name="ar" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Leirás:</label>
                <div className="col-sm-9">
                    <input type="text" name="leiras" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép:</label>
                <div className="col-sm-9">
                    <input type="text" name="keplink" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
        </form>
    </div>

  )
}

export default InstrumentCreatePage