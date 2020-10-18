var a = 0, b = 1, f = 1;

for(var i = 2; i <= 10+1; i++) {
  console.log(f)
  f = a + b
  a = b
  b = f
}

