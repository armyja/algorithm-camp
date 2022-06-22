/*
 * @lc app=leetcode.cn id=1360 lang=rust
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start

impl Solution {
    pub fn days_between_dates(date1: String, date2: String) -> i32 {

        fn get_days_of_month(year: i32, month: i32) -> i32 {
            if month == 2 {
                if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) {
                    return 29;
                }
                return 28;
            }
            if month == 1
                || month == 3
                || month == 5
                || month == 7
                || month == 8
                || month == 10
                || month == 12
            {
                return 31;
            }
            return 30;
        }

        fn get_days_of_year(year: i32) ->i32{
            if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) {
                    return 366;
            }
            365
        }

        fn get_days_until(date: &str) -> i32 {
            let mut iter = date.split("-");
            let year: i32 = iter.next().unwrap().parse().unwrap();
            let month: i32 = iter.next().unwrap().parse().unwrap();
            let day: i32 = iter.next().unwrap().parse().unwrap();
            let mut days = 0;
            for y in 1971..year {
                days += get_days_of_year(y);
            }
            for m in 1..month {
                days += get_days_of_month(year,m);
            }
            days + day
        }

        (get_days_until(&date1) - get_days_until(&date2)).abs()
    }
}
// @lc code=end
