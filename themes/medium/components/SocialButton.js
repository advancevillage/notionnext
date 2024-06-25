import { siteConfig } from '@/lib/config'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='space-x-3 text-xl text-gray-600 dark:text-gray-400 flex-wrap flex justify-center '>
      {siteConfig('CONTACT_WEIBO') && <a target='_blank' rel='noreferrer' title={'weibo'} href={siteConfig('CONTACT_WEIBO')} >
        <i className='fab fa-weibo transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
      {/* {siteConfig('CONTACT_GITHUB') && <a target='_blank' rel='noreferrer' title={'github'} href={siteConfig('CONTACT_GITHUB')} >
        <i className='fab fa-github transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>} */}
      {siteConfig('CONTACT_BILIBILI') && <a target='_blank' rel='noreferrer' title={'bilibili'} href={siteConfig('CONTACT_BILIBILI')} >
        <i className='fab fa-bilibili transform hover:scale-125 duration-150 hover:text-green-600'/>
      </a>}
    </div>
}
export default SocialButton
