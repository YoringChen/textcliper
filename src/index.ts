class HelloWorld {
  public msg: string

  public constructor (msg?: string) {
    this.msg = msg || 'hello world'
  }

  public sayHelloWorld (): string {
    return this.msg
  }
}

export default HelloWorld
