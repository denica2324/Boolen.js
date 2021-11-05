//let nums = [1,2,3,1]; //2,3
let nums = [1,2,3,1]; //1,2;5,8

function Scores(nums) {
    let res = {};
    for(let i = 0; i < nums.length; i++) {
        if((i === 0 && nums[i] > nums[i + 1]) || (i === nums.length - 1 && nums[i] > nums[nums.length - 1]) || (i !== 0 && i !== nums.length - 1 && nums[i-1] < nums[i] && nums[i] > nums[i+1])) {
            res[i] = nums[i];
        }
    }

    return res;
}

console.log(Scores(nums))