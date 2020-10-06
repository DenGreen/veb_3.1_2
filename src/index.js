class ErrorRepository {
    constructor(){
        this.map = new Map([
            [1, 'Описание ошибки 1 '],
            [2, 'Описание ошибки 2 '],
            [3, 'Описание ошибки 3 '],
            [4, 'Описание ошибки 4 '],
            [5, 'Описание ошибки 5 ']
        ]);
    }

    translate(code){
        return this.map.get(code) || 'Unknown error';
    }

}

const err = new ErrorRepository();

console.log(err.translate(5));