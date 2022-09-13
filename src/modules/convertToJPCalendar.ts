export default class ConvertToJPCalendar {
    readonly #date: Date;
    readonly #jpCalendar: string;

    constructor(dateString: string) {
        // dateString is in the format of YYYY-MM-DD
        const [year, month, day] = dateString.split('-').map((str) => parseInt(str, 10));
        this.#date = new Date(year, month - 1, day);

        // Check if the date is valid
        if (this.#date.getFullYear() !== year || this.#date.getMonth() + 1 !== month || this.#date.getDate() !== day) {
            throw new Error('Invalid date');
        }

        // Check if the date is in the range of 1873-01-01 to 2100-12-31
        if (this.#date < new Date(1900, 0, 1) || this.#date > new Date(2100, 11, 31)) {
            throw new Error('Date out of range');
        }

        const calendarMap =  ['明治' , '大正' , '昭和' , '平成' , '令和']
    }

    public getDate(): Date {
        return this.#date;
    }
}

const dateString = '2020-01-01';
const convertToJPCalendar = new ConvertToJPCalendar(dateString);
console.log(convertToJPCalendar.getDate().toLocaleString()); // 2020-01-01