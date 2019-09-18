export default class Base {
    constructor(nombreBase, tiempoLlegada)
    {
        this._tiempoLlegada = tiempoLlegada;
        this._nombreBase = nombreBase;

    }

    getNombreBase()
    {
        return this._nombreBase;
    }

    getTiempoLlegada()
    {
        return this._tiempoLlegada;
    }
}