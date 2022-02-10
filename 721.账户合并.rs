/*
 * @lc app=leetcode.cn id=721 lang=rust
 *
 * [721] 账户合并
 */

// @lc code=start
use std::collections::{HashMap, HashSet};
impl Solution {
    pub fn accounts_merge(mut accounts: Vec<Vec<String>>) -> Vec<Vec<String>> {
		// 创建包含复合元素的并查集，复合元素包括该元素归属的索引以及包含的email
        let mut fa: Vec<(usize, Vec<String>)> = (0..accounts.len())
		.zip(std::iter::repeat(vec![]).take(accounts.len()))
		.collect();
		// find 函数，step代表经历的节点数(也可以看成权重)，v_join包含遍历这棵树经历的所有节点，返回的是根结点和权重
		fn fs(x: usize, fa: &Vec<(usize, Vec<String>)>, step: i32, v_join: &mut Vec<usize>) -> (usize, i32) {
			v_join.push(x);
			if fa[x].0 == x {
				return (x, step);
			}
			return fs(fa[x].0, fa, step + 1, v_join);
		}
		// hashmap记录每个email所属集合的id
		let mut hm: HashMap<String, usize> = HashMap::new();
		// vector ,记录每个email遍历至根节点所包含的节点
		let mut v_join: Vec<usize> = vec![];
		for i in 0..accounts.len() {
			// index 和 temp 对应最大权重对应的索引
			let (mut index, mut temp) = (i, -1);
			for j in 1..accounts[i].len() {
				let s = accounts[i][j].clone();
				// 发现重复的email, 计算权重
				if let Some(ind) = hm.get(&s) {
					if ind != &i {
						let (deep_index, step) = fs(*ind, &fa, 1, &mut v_join);
						if step >temp {
							temp = step;
							index = deep_index;
						}
					}
				} else {
					hm.insert(s.clone(), i);
					fa[i].1.push(s);
				}
			}
			// 根据权重，刷新并查集
			for j in &v_join {
				fa[*j].0 = index;
			}
			fa[i].0 = index;
			v_join.clear();
		}
		// 再重新遍历一次并查集
		for i in 0..fa.len() {
			if i > 0 && fa[i-1] == fa[i]{
				continue;
			}
			let m = fs(i, &fa, 0, &mut v_join);
			fa[i].0 = m.0;
		}

		fa.sort_by(|a, b| a.0.cmp(&b.0));
		let mut ans: Vec<Vec<String>> = vec![];
		let mut cur_ind = 0_usize;
		let mut pre_name = "".to_owned();
		
		for i in 0..fa.len() {
			if fa[i].1.len() == 0 {
				continue;
			}
			let name = accounts[fa[i].0][0].clone();
			if i == 0{
				ans.push(fa[i].1.clone());
				pre_name = name;
			} else {
				if fa[i - 1].0 == fa[i].0 {
					ans[cur_ind].extend(fa[i].1.clone());
				} else {
					ans[cur_ind].sort();
					ans[cur_ind].insert(0, pre_name.clone());
					pre_name = name;
					ans.push(fa[i].1.clone());
					cur_ind += 1;
				}
			}
		}
		ans[cur_ind].sort();
		ans[cur_ind].insert(0, pre_name.clone());
		
		ans
    }
}

// https://zhuanlan.zhihu.com/p/346583098
// struct Account(String, Vec<String>);
// fn union_email(accounts: &mut Vec<Account>) {
//     //
// }
// fn accounts_merge(accounts: Vec<Vec<String>>) -> Vec<Vec<String>> {
//     let mut sets = Vec::<Account>::new();
//     for account in accounts {
//         let mut iter = account.into_iter();
//         let name = iter.next().unwrap();
//         sets.push(Account(name, iter.skip(1).collect()));
//     }
//     union_email(&mut sets);
//     sets.into_iter()
//         .map(|acc| {
//             let mut res = vec![acc.0];
//             res.extend(acc.1);
//             res
//         })
//         .collect()
// }
// @lc code=end

