function evenify_all(nums){
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
        if(num % 2 == 0){
            console.log(num, ': is even number')
        }
        else{
            console.log(num*2, ': is odd number')
        } 
    }
}

nums = [5, 12, 49, 67, 26, 7];
evenify_all(nums);

friends_age = [33, 9, 46, 71, 24];
evenify_all(friends_age);










