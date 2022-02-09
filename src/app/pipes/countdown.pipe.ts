import { Pipe, PipeTransform } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

    private getMsDiff = (futureDate: string): number => ((new Date(futureDate).getTime()) - new Date().getTime());

    private msToTime(msRemaining: number): string | null {
        console.log(msRemaining);
        if (msRemaining < 0) {
            console.log('No Time Remaining:', msRemaining);
            return null;
        }

        const seconds: string | number = Math.floor(msRemaining / 1000) % 60;
            const minutes: string | number = Math.floor(msRemaining / (1000 * 60)) % 60;
            const hours: string | number = Math.floor(msRemaining / (1000 * 60 * 60)) % 24;
            const days: string | number = Math.floor(msRemaining / (1000 * 60 * 60 * 24)) % 30;
            const months: string | number = Math.floor(msRemaining / (1000 * 60 * 60 * 24 * 30)) % 12;
            const years: string | number = Math.floor(msRemaining / (1000 * 60 * 60 * 24 * 30 * 12));
            let outSec: string | number;
            let outMin: string | number;
            let outHr: string | number;
            let outDay: string | number;
            let outMnt: string | number;
            let outYr: string | number;

        /**
         * Add the relevant `0` prefix if any of the numbers are less than 10
         * i.e. 5 -> 05
         */
        

        outSec = seconds ? seconds == 1 ? seconds + ' second': seconds + ' seconds' : '';
        outMin = minutes ? minutes == 1 ? minutes + ' minute': minutes + ' minutes' : '';
        outHr = hours ? hours == 1 ? hours + ' hour': hours + ' hours' : '';
        outDay = days ? days == 1 ? days + ' day': days + ' days' : '';
        outMnt = months ? months == 1 ? months + ' month': months + ' months' : '';
        outYr = years ? years == 1 ? years + ' year': years + ' years' : '';
        
        
        // return `${hours}:${minutes}:${seconds}`;
        //return `${years}:${months}:${days}:${hours}:${minutes}:${seconds}`
        return `${outYr} ${outMnt} ${outDay} ${outHr} ${outMin} ${outSec} left`
    }

    /**
     * @param futureDate    should be in a valid Date Time format
     *                      e.g. YYYY-MM-DDTHH:mm:ss.msz
     *                      e.g. 2021-06-04T17:27:10.740z
     */
    public transform(futureDate: string): Observable<string> {
        /**
         * Initial check to see if time remaining is in the future
         * If not, don't bother creating an observable
         */
        if (!futureDate || this.getMsDiff(futureDate) < 0) {
            return null;
        }
        return timer(0, 1000).pipe(
            map(() => {
                return this.msToTime(this.getMsDiff(futureDate));
            })
        );
    }
}