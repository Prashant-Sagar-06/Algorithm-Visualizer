import { sleep } from "../Utils/ui.js";

export async function bubbleSort(array, speed) {
    const bars = document.getElementsByClassName("bar");

    let n = array.length;
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            // highlight bars being compared
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(speed);

            if (array[j] > array[j + 1]) {
                // swap in array
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // update in UI
                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

            // revert color back
            bars[j].style.background = "#4caf50";
            bars[j + 1].style.background = "#4caf50";
        }
    }
}
