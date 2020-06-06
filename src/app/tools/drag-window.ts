
export class DragWindow {

    private mouseDown: boolean = false

    private window: HTMLElement

    private xOffset: number
    private yOffset: number

    private top: number = 0
    private left: number = 0

    private dragbarClassName: string
    private dragElementClassName: string

    constructor(_dragbarClassName?: string, _dragElementClassName?: string) {

        this.dragbarClassName = _dragbarClassName || 'drag-bar'
        this.dragElementClassName = _dragElementClassName || 'drag-window'
    }


    public onMouseDown(e) {

        this.mouseDown = true
        
        if(e.target.classList.contains(this.dragbarClassName)) {
    
          this.window = e.target.closest('.'+this.dragElementClassName)

          let rect = this.window.getBoundingClientRect()

          this.left = rect.left
          this.top = rect.top
            
          this.xOffset = e.pageX - this.left 
          this.yOffset = e.pageY - this.top
        }
        else this.window = null
      }
    
      public onMouseMove(e) {

        // IF WINDOW IS TOO BIG TO BE DRAGED 
        // SHRINK DOWN AND CALC RECT OFFSET TO SET LEFT AND TOP
        
        if(this.mouseDown && this.window) {
    
            let window = this.window.closest('.'+this.dragElementClassName) as HTMLElement
    
            this.left = e.pageX - this.xOffset
            this.top = e.pageY - this.yOffset
    
            window.style.position = 'absolute'
    
            window.style.left = this.left + 'px'
            window.style.top = this.top + 'px'
    
            window.style.width = '300px'
            window.style.height = 'auto'
            window.style.overflow = 'hidden'
        }
      }
      
      public onMouseUp(e) {
        
        this.mouseDown = false
    
        this.window = null

        this.top = 0
        this.left = 0
      }

}