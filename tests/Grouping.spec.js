const {test, expect} = require('@playwright/test');


test.beforeAll(async()=>{
     console.log('this is beforeAll Hook.....')
})

test.afterAll(async()=>{
     console.log('this is afterAll Hook.....')
})

test.beforeEach(async()=>{
     console.log('this is beforeEach Hook.....')
})

test.afterEach(async()=>{
     console.log('this is afterEach Hook.....')
})

test.describe('Group 1', () => {
test('Test1',async ({page})=>{
    console.log('this is my Test 1.....')
});

test('Test2',async ({page})=>{
    console.log('this is my Test 2.....')
    });
});

test.describe('Group 2', () => {
test('Test3',async ({page})=>{
    console.log('this is my Test 3.....')
});

test('Test4',async ({page})=>{
    console.log('this is my Test 4.....')
    });
});
