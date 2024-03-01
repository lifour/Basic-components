// 实现 Button 组件
class HwButton extends React.Component {

    get className() {
        let className = 'hw-button'

        let typeMap = {
            default: 'hw-button-default',
            primary: 'hw-button-primary',
            dashed: 'hw-button-dashed',
            text: 'hw-button-text',
            link: 'hw-button-link',
        }

        let sizeMap = {
            large: 'hw-button-large',
            small: 'hw-button-small',
        }

        let booleanMap = {
            danger: 'hw-button-dangerous',
            disabled: 'hw-button-disabled',
            ghost: 'hw-button-background-ghost',
            loading: 'hw-button-loading',
        }

        let { type, size } = this.props

        // 设置按钮类型
        let classType = typeMap['default']
        if (typeMap.hasOwnProperty(type)) {
            classType = typeMap[type]
        }
        className += ' ' + classType

        // 设置按钮大小
        let classSize = ''
        if (sizeMap.hasOwnProperty(size)) {
            classSize = sizeMap[size]
        }
        className += ' ' + classSize

        // 设置布尔状态
        for (let booleanKey of Object.keys(booleanMap)) {
            if (this.props[booleanKey]) {
                className += ' ' + booleanMap[booleanKey]
            }
        }

        return className
    }

    render() {
        let props = this.props
        let { loading, loadingIcon, children } = props

        // 设置执行中状态
        let defaultLoadingIcon = <svg viewBox="0 0 1024 1024" className="hw-button-loading-svg" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>
        let loadingSpan = <span className="hw-button-loading-animation">
                { loadingIcon ? loadingIcon : defaultLoadingIcon }
            </span>

        return <button type="button" className={this.className} onClick={props?.onClick} {...props}>
            { loading && loadingSpan }
            <span>{ children || '' }</span>
        </button>
    }
}