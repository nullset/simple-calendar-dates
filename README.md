# simple-calendar-dates

A simple, single dependency library to generate the dates, or week-grouped dates, of a specified month and year.

## Why choose this library?

There are a number of more established choices, but many of them are bloated and slow. This one is light, lean, and very performant.

## Dependencies

- [dayjs](https://day.js.org/)

## How to use

```
import { getMatrix } from 'simple-calendar-dates';

const dateArray = getMatrix('2022-06');
```

This will return an array like this:

```
[
  [
    {
      "date": "2022-05-29",
      "day": 29,
      "type": -1
    },
    {
      "date": "2022-05-30",
      "day": 30,
      "type": -1
    },
    {
      "date": "2022-05-31",
      "day": 31,
      "type": -1
    },
    {
      "date": "2022-06-01",
      "day": 1,
      "type": 0
    },
    {
      "date": "2022-06-02",
      "day": 2,
      "type": 0
    },
    {
      "date": "2022-06-03",
      "day": 3,
      "type": 0
    },
    {
      "date": "2022-06-04",
      "day": 4,
      "type": 0
    }
  ],
  [
    {
      "date": "2022-06-05",
      "day": 5,
      "type": 0
    },
    {
      "date": "2022-06-06",
      "day": 6,
      "type": 0
    },
    {
      "date": "2022-06-07",
      "day": 7,
      "type": 0
    },
    {
      "date": "2022-06-08",
      "day": 8,
      "type": 0
    },
    {
      "date": "2022-06-09",
      "day": 9,
      "type": 0
    },
    {
      "date": "2022-06-10",
      "day": 10,
      "type": 0
    },
    {
      "date": "2022-06-11",
      "day": 11,
      "type": 0
    }
  ],
  [
    {
      "date": "2022-06-12",
      "day": 12,
      "type": 0
    },
    {
      "date": "2022-06-13",
      "day": 13,
      "type": 0
    },
    {
      "date": "2022-06-14",
      "day": 14,
      "type": 0
    },
    {
      "date": "2022-06-15",
      "day": 15,
      "type": 0
    },
    {
      "date": "2022-06-16",
      "day": 16,
      "type": 0
    },
    {
      "date": "2022-06-17",
      "day": 17,
      "type": 0
    },
    {
      "date": "2022-06-18",
      "day": 18,
      "type": 0
    }
  ],
  [
    {
      "date": "2022-06-19",
      "day": 19,
      "type": 0
    },
    {
      "date": "2022-06-20",
      "day": 20,
      "type": 0
    },
    {
      "date": "2022-06-21",
      "day": 21,
      "type": 0
    },
    {
      "date": "2022-06-22",
      "day": 22,
      "type": 0
    },
    {
      "date": "2022-06-23",
      "day": 23,
      "type": 0
    },
    {
      "date": "2022-06-24",
      "day": 24,
      "type": 0
    },
    {
      "date": "2022-06-25",
      "day": 25,
      "type": 0
    }
  ],
  [
    {
      "date": "2022-06-26",
      "day": 26,
      "type": 0
    },
    {
      "date": "2022-06-27",
      "day": 27,
      "type": 0
    },
    {
      "date": "2022-06-28",
      "day": 28,
      "type": 0
    },
    {
      "date": "2022-06-29",
      "day": 29,
      "type": 0
    },
    {
      "date": "2022-06-30",
      "day": 30,
      "type": 0
    },
    {
      "date": "2022-07-01",
      "day": 1,
      "type": 1
    },
    {
      "date": "2022-07-02",
      "day": 2,
      "type": 1
    }
  ]
]
```

Each object in the array will have three values: `date`, `day`, and `type`.

`date` is the ISO formatted date string (YYYY-MM-DD).

`day` is the numeric day of the object (eg, `6` for the 6th of the month).

`type` specifies if the date appears in the previous month (`-1`), the current month (`0`), or the next month (`1`).

You can also use the `getDates` function to return a flat list of dates (not broken up into an array of days per week).
