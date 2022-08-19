// @ts-ignore
console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
{
    const sum = (first: number) => {
        return function (second: number) {
            return first + second;
        };
    }
    console.log("Task 1")
    console.log(sum(3)(6))
}

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

{
    console.log("Task 2")
    const makeCounter = () => {
        let count = 1;
        return () => {
            console.log(count++)
        }
    }
    const counter = makeCounter();
    counter(); // 1
    counter(); // 2
    const counter2 = makeCounter();
    counter2(); // 1
    counter(); // 3
}

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
{
    console.log("Task 3")
    const makeCounter = (number: number) => {
        let count = number;
        return {
            increase() {
                console.log("increase" + ++count)
            },
            decrease() {
                console.log("decrease" + --count)
            },
            reset() {
                count = 0
                console.log("reset" + count)
            },
            set(x: number) {
                count = x
                console.log("set count:" + count)
            }
        }
    }
    const counter = makeCounter(3);
    counter.increase(); // 4
    counter.decrease(); // 3
    counter.decrease(); // 2
    counter.reset(); // 0
    counter.set(7); // 7

}

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
{
    console.log("Task 4")

    const superSum = (n: number) => {
        if (n === 0) return 0;
        if (n === 1) return (num: number) => num;

        let massArg: number[] = [];

        function helper(...args: number[]) {
            massArg = [...massArg, ...args];
            if (massArg.length >= n) {
                massArg.length = n;//обрезаем лишние аргументы из массива, если их передали больше, чем нужно
                return massArg.reduce((acc, number) => acc + number)
            } else {
                return helper;
            }
        }

        return helper;
    };

    // @ts-ignore
    let a = superSum(3)(2, 2, 3)
    console.log(a)
    // @ts-ignore
    let b = superSum(3)(2)(2)(2)
    console.log(b)
    // @ts-ignore
    let c = superSum(3)(2, 2)(1)
    console.log(c)
}
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3  и т д

//рекурсия
{
    console.log("Task 5.1");
    // @ts-ignore
    const sumToRec = (n: number) => {
        if (n === 1) return n
        return n + sumToRec(n - 1)
    }
    console.log("рекурсия sum 3: " + sumToRec(3))//6
}

//цикл
{
    // @ts-ignore
    const sumToFor = (n: number) => {
        let count = 0
        for (let i = 0; i <= n; i++) {
            count += i
        }
        return count
    }
    console.log("sumFor 3: " + sumToFor(3))//6
}

//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
{
    // @ts-ignore
    const factorial = (n: number) => {
        if (n === 1) return n
        else return factorial(n - 1) * n
    }
    console.log(" factorial5: " + factorial(5))//120
}

//Напишите функцию printList(list), которая выводит элементы списка по одному.
{
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    //рекурсия
    const printList = (list: any) => {

        if (list.next === null) return console.log(list.value)
        else {
            console.log(list.value)
            printList(list.next)
        }
    }
    printList(list)

    //цикл
    console.log("цикл");
    const printList2 = (list: any) => {
        while (list) {
            console.log(list.value);
            list = list.next;
        }
    }
    printList2(list)

    //в обратном порядке
    console.log("в обратном порядке");


    const printList3 = (list: any) => {
        let mass = []
        if (list.next === null) mass.push(list.value)
        else {
            mass.push(list.value)
            printList3(list.next)
        }
        mass.reverse().forEach(el => console.log(el))
    }

    printList3(list)
}


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
{//@ts-ignore
    function customFlat(arr: any): any {
        //@ts-ignore
        return arr.reduce((acc, current) => {
            if (Array.isArray(current)) return acc.concat(customFlat(current))
            return [...acc, current]
        }, [])
    }

    let a = [1, 2, 3, [4, 5, [6, 7]]]
    console.log(customFlat(a))
}


// just a plug
// export default () => {};
