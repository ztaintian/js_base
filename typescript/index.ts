const hello: string = "Hello vue!"
function say<T>(arg: T): T {
  return arg;
}
say(hello) // Hello vue! 
