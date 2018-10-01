// Given an array of integers, return indices of the two numbers 
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

function twoSum(nums, target) {
    let pair = [];
    let numsHash = {};

    nums.map(num => numsHash[num] = num);

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let numCheck = target - num;

        if (numsHash[numCheck] && numCheck !== num) {
            summed = [nums.indexOf(num), nums.indexOf(numCheck)];
            return summed;
        }
    }
}

//twoSum([2,7,11,15], 9) => [0,1] - CORRECT
//twoSum([3,2,4], 6) => [1,2] - CORRECT
//twoSum([3,3], 6) => [0,1] - FAIL

