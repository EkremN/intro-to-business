webpackJsonp([0x70738304f597],{487:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Coding is rarely a one-person job. Most frequently you are on a team of people, ranging from back end developers to designers and all of you are contributing to one project. As you may imagine, if you not careful, everyone ends up stepping on each others\' toes.</p>\n<p>This is what git is for.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/intro-to-web-dev-v2/static/git-e2fd3b99d03afd2c69189c17ee1962f1-e9ba9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 220px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.81818181818182%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABeklEQVQoz4WSO0sDQRCAQwQfhYIgprHOXiHERDSeGvOwSAj3wFpEbCzFVmwsLDQ+foIgRrARbCyFNGJhyojYKCIENJV6OY0Xjd/iGaMoHnzs7DHzMbO7Hk/DVzHEsmMq+TdT6fb888WGggo4MADt0XBfz7cEWxdzz7qYR1h8MUThSRe+n5J0XG1KRcNeGSfU/mZEU8mxwba4GponXqsnWpo/g6AGW8+G6EXqOKYo0LGvoaMMXMXV4A2CC+INuIdF9hbcwbbnQRMrFrLyh7BkaWIK6azsEs5eTaXLFdowCpMU5tx/LxBlf1Dv8FETx1CTUsYuQYbR15HuIHyqmkrALd6FItzG1ODcn8KqoXQizEspXebKmn9Gjl8xFLuii5TM0cdHvBTJUQ9hleIJpGHiKvECZIkLrEvu7dal50izdGnTYfLz/CKDgRaSL2ET9iiusRrxoVBaHgN7H0xD5OuWNSGlp5yhTZfJH0+kA65hn6Ij1pPEcKj1t+f0DkHCttEwbPpZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="git logo"\n        title=""\n        src="/intro-to-web-dev-v2/static/git-e2fd3b99d03afd2c69189c17ee1962f1-e9ba9.png"\n        srcset="/intro-to-web-dev-v2/static/git-e2fd3b99d03afd2c69189c17ee1962f1-1deb3.png 163w,\n/intro-to-web-dev-v2/static/git-e2fd3b99d03afd2c69189c17ee1962f1-e9ba9.png 220w"\n        sizes="(max-width: 220px) 100vw, 220px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Git is a distributed source control management tool. That\'s a fancy way of saying that it\'s an easy way to share code and work on it together with a large team. It\'s also a very convenient way to backup your code off your computer and an easy way for you to post code online so other people can use it.</p>\n<p>We are going to interact with git from the terminal. If you\'re on Mac or Linux, just open your terminal.</p>\n<p>If you\'re on Windows, either find a way to interact with the Linux subsystem or go download <a href="https://gitforwindows.org/">git for Windows</a>. Git for Windows is very bash-like so most of the commands we\'ll be using should just work. If you\'re using the Linux subsystem, everything will definitely work.</p>\n<h2 id="bash"><a href="#bash" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bash</h2>\n<p>Open your terminal, let\'s get comfortable with navigating in bash. In bash, you\'re just navigating around the folders in your computer. You know how you use the File Finder (or whatever your operating system has) to find files and you click in and out-of folders? It\'s the same for bash, we\'re just using text commands to do it now.</p>\n<h3 id="pwd"><a href="#pwd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>pwd</h3>\n<p>You should see a fairly empty screen. Type <code class="language-text">pwd</code> and hit enter. <code class="language-text">pwd</code> stands for "print working directory" (directory is synonymous with folder) and sure enough it prints where you are in your terminal. It\'s basically asking bash "where am I right now?" It should print something like: <code class="language-text">/Users/&lt;your user name here&gt;</code>. This is probably your home directory. Every user on your computer has their own home directoy. Usually you want to be working out of here to keep things organized.</p>\n<h3 id="ls"><a href="#ls" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ls</h3>\n<p>Now type <code class="language-text">ls</code>. <code class="language-text">ls</code> stands for "list". It lists everything in the directory. It\'ll show you a bunch of files and folders you can open or run. <code class="language-text">ls</code> is like asking "what\'s here?" Try typing <code class="language-text">ls -l</code>. You\'ll notice the same files and folders are being outputted but it\'s formatted in a different way. <code class="language-text">-l</code> is what\'s called a <strong>flag</strong>. It\'s something that\'s passed to the <code class="language-text">ls</code> program and it modifies what it does. In this case, <code class="language-text">-l</code> means give us the long output. Try typing <code class="language-text">ls -lah</code>. This will show you even more files because <code class="language-text">-a</code> means show all files, including hidden files (which are the ones that start with a <code class="language-text">.</code>) and it will show you the file sizes in more readable sizes because of <code class="language-text">-h</code>.</p>\n<p>If you forget what these means, <a href="https://explainshell.com/explain?cmd=ls+-lah">explainshell.com</a> is an extremely helpful site.</p>\n<h3 id="man"><a href="#man" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>man</h3>\n<p>Try <code class="language-text">man ls</code>. <code class="language-text">man</code> is short for manual. It\'ll pop up documentation for <code class="language-text">ls</code> in case you forget you how to use it. Most things should have <code class="language-text">man</code> pages but they\'re usually pretty verbose. When you want to quit, hit the <code class="language-text">q</code> key.</p>\n<h3 id="mkdir"><a href="#mkdir" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mkdir</h3>\n<p>Hopefully you\'re in your home directory right now. If not, type <code class="language-text">cd ~</code> (I\'ll explain what that is in the next section.) Okay, now that we\'re here, type <code class="language-text">mkdir webdev</code>. This will create a new directory (it stands for "make directory") and now you can type <code class="language-text">ls</code> and see it.</p>\n<h3 id="cd"><a href="#cd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cd</h3>\n<p>Type <code class="language-text">cd webdev</code>. This will move us from the home directory into the <code class="language-text">webdev</code> folder we just created. Type <code class="language-text">pwd</code> to see that we\'re inside the directory. Type <code class="language-text">ls</code> to see that there\'s nothing inside the directory. Type <code class="language-text">cd ..</code> to get out of this directory and back into your home directory. <code class="language-text">..</code> means up one directory. Type <code class="language-text">cd webdev</code> to get back into the directory.</p>\n<h3 id="touch"><a href="#touch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>touch</h3>\n<p>Type <code class="language-text">touch index.html</code>. <code class="language-text">touch</code> creates an empty file where-ever you tell it to. Here we told it to create a file called <code class="language-text">index.html</code> in this directory. If you type <code class="language-text">ls</code> you\'ll see your new folder.</p>\n<h3 id="code"><a href="#code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>code</h3>\n<p>If you\'re using VSCode as your editor, you can open VSCode directly from bash (most other editors have ways of doing this too.) <a href="https://aka.ms/Mayv8z">Follow the commands here</a>. Type <code class="language-text">code index.html</code> to open <em>just</em> that file, or type <code class="language-text">code .</code> to open this whole directory as a project. The <code class="language-text">.</code> means this directory, similar to how <code class="language-text">..</code> means up one directory.</p>\n<h3 id="vi"><a href="#vi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>vi</h3>\n<p>Oh boy. Here we go. Type <code class="language-text">vi index.html</code>. This going to open vim which is an editor that\'s all in the command line. I definitely do not want too much into it but eventually you\'re going to accidentally to open it and you have to know how to close it. It also can be useful to quickly edit something.</p>\n<p>vim has multiple "modes" you can enter. By default you start out in command mode. If type <code class="language-text">i</code> you will enter insert mode. Now you can type. Enter "hello world" or something like that. Now hit your escape key. Now you\'re back in command mode. type <code class="language-text">:q</code> and hit enter. This is how you\'d typically quit but it won\'t let you since you have unsaved changes. You can either type <code class="language-text">:w</code> and then <code class="language-text">:q</code> to save your changes and quit (or just <code class="language-text">:wq</code> to do both at once) or you can type <code class="language-text">:q!</code> to quit without saving. vim is so much deeper and complicated than that but that\'s enough to make you dangerous.</p>\n<h3 id="more-bash"><a href="#more-bash" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>more bash</h3>\n<p>If you want more bash skills, please check out Jem Young\'s <a href="https://frontendmasters.com/courses/full-stack/">Full Stack</a> and <a href="https://frontendmasters.com/courses/full-stack-v2/">Full Stack 2</a>.</p>\n<h2 id="git"><a href="#git" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git</h2>\n<p>Okay, let\'s use Git now. Put something meaningful in your index.html you created, something like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n\n&lt;head&gt;\n  &lt;title&gt;Git&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;h1&gt;Git Example&lt;/h1&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;</code></pre>\n      </div>\n<p>Doesn\'t matter really what it is. Now <code class="language-text">cd</code> into your project.</p>\n<h3 id="git-init"><a href="#git-init" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git init</h3>\n<p>Type <code class="language-text">git init</code>. This begins a git project. If you type <code class="language-text">ls -lah</code> you\'ll see that it creates a secret <code class="language-text">.git</code> folder where it keeps track of everything (you don\'t have to look in there or do anything with it.)</p>\n<h3 id="git-status"><a href="#git-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git status</h3>\n<p>Type <code class="language-text">git status</code>. This will tell you that <code class="language-text">index.html</code> is an untracked file.</p>\n<p>The way git is organized is that you group you changes into what are called <strong>commits</strong>. A commit is one group of changes that are made permanent. A git repository will have many commits. Some will have just one commit, some will have many. As of May 12, 2018, the git repository for the Linux project has 753,310 commits. A commit is made up of all the changes, the differences between where the code was and where the code is now. This will add new files, remove old files, delete some lines in some files, and add lines in others.</p>\n<p>So let\'s make our first commit in this repository.</p>\n<h3 id="git-add"><a href="#git-add" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git add</h3>\n<p>The way you add files to a commit is that they have to go through two stages: being staged and then being committed. Type <code class="language-text">git add index.html</code>. This will make index.html staged and ready to be committed. Type <code class="language-text">git status</code> and it will show index.html as a change ready to be committed. You can also type <code class="language-text">git add .</code> to make everything in this directory staged, or type <code class="language-text">git add -A</code> to add everything <em>and</em> include anything you deleted to also be deleted from the repo.</p>\n<h3 id="git-commit"><a href="#git-commit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git commit</h3>\n<p>Type <code class="language-text">git commit -m &quot;My first commit&quot;</code>. It should tell you added your first commit. Type <code class="language-text">git status</code> and it should tell you you haven\'t changed anything since last commit. The <code class="language-text">-m</code> is important because each commit must have a message with it and it\'s best to say what you did in that commit, something like "fixed this bug" or "added this feature". If you forget the <code class="language-text">-m</code> it\'ll probably throw you into vim, so be prepared!</p>\n<h3 id="git-log"><a href="#git-log" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git log</h3>\n<p>Type <code class="language-text">git log</code> now to see your commit immortalized in the git repository (or repo, which is what you call each git project.)</p>\n<h3 id="more-git"><a href="#more-git" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>more git</h3>\n<p>Git is so powerful. There are a lot of really cool features. Probably the biggest thing we didn\'t talk about here is merging code with others. See <a href="https://frontendmasters.com/courses/git-in-depth/">Nina Zakharenko\'s course</a> to become a git master. Some other basic functions you\'ll want to learn is how to <code class="language-text">git pull</code>, <code class="language-text">git clone</code>, <code class="language-text">git merge</code>, <code class="language-text">git rebase</code>, <code class="language-text">git stash</code>, <code class="language-text">git checkout</code>, and <code class="language-text">git branch</code>. Those are the ones that are needed for base level proficiency in git.</p>\n<h3 id="github"><a href="#github" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GitHub</h3>\n<p>If you have not already, please go sign up for a <a href="https://github.com/">GitHub</a> account. GitHub is a centralized repository for git projects. It allows strangers across the world to collaborate on code and make cool stuff. It has become the modern developer\'s résumé. The code for this website is hosted on <a href="https://github.com/btholt/intro-to-web-dev-v2">GitHub</a> (feel free to star it if you\'re there!)</p>\n<p>Many companies host their code there for all their various open and closed source projects. It\'s a cool way to browse other people\'s code and see how they do things. If you see a mistake, you can <strong>fork</strong> their code, which means make your own copy of and fix it yourself. Once fixed, you can open a <strong>pull request</strong> against it. A pull request (often abbreviated as <strong>PR</strong>) is a request for them to merge your commits in with theirs. They will then decide if they want to (since it\'s their repo) and will merge it or not.</p>\n<p>Today, we\'re going to create our own repo.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-90b8e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.822966507177034%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAg0lEQVQI15XIwQqCQABFUf+sRYswmzRHJjP8vpxmCld9UKVmiyJIijY3Ww616cHhwvPUIidJl4RSOcZiRpSkTEJJJOcEfaXKCKYxYawYDEeOTAhy38fTZoOx2y+fX6/tT4W2rLRxlIVmpwu8y/XGv7t3HftjTdW01KeWQ9X0PfN4vngDX6uwU6Nisd0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="GitHub nav-bar demonstrating where the + symbol is to create a new repo"\n        title=""\n        src="/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-10273.png"\n        srcset="/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-9b14a.png 163w,\n/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-94962.png 325w,\n/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-10273.png 650w,\n/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-2fc6f.png 975w,\n/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-a8a2c.png 1300w,\n/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-173d2.png 1950w,\n/intro-to-web-dev-v2/static/gh-nav-a672554807ec7d774ac0d81789d76736-90b8e.png 2090w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Click the + (which I highlighted in red for you) in the nav and create a new repository. Name the new repo whatever you would like, do not add the license or README, and continue.</p>\n<h3 id="git-remote"><a href="#git-remote" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git remote</h3>\n<p>Back to your terminal, navigate to your project using <code class="language-text">cd</code> and write the following command: <code class="language-text">git remote add origin &lt;your project url here&gt;</code>. Notice about half way down the page you can see that command, feel free to copy and paste that.</p>\n<p>This command is going to add a new remote to your project called <code class="language-text">origin</code>. A remote is somewhere for you to push your computer. If you use a GitHub-based flow (most of us do) this will be one of the very few remotes you\'ll ever use. Git can be used in a more decentralized way; you could have a remote that\'s your buddy\'s computer. But I\'ve never worked that way. We called the remote "origin" but we could have called it anything. But everyone calls it origin. "origin" should always be called where <em>your</em> repo is. Sometimes you\'ll fork someone else\'s code and keep track of that repo too, and typically you\'d call that "upstream".</p>\n<p>Type <code class="language-text">git remote -v</code> and you should see your newly-added remote. It adds the remote twice because you can fetch (which is what you call when you pull code down) from one place and you can push (which is what you call when you send your code up) to another. I\'ve never seen anyone do that though.</p>\n<h3 id="git-push"><a href="#git-push" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>git push</h3>\n<p>Okay, now that we\'re here, type <code class="language-text">git push origin master</code>. <code class="language-text">push</code> is the command to send your code up to GitHub. <code class="language-text">origin</code> is the name of the remote that we just added. <code class="language-text">master</code> is the name of the branch that we\'re on. Git has the ability to keep track of multiple branches of code so that you and your colleague can work on the same code at the same time but each keep your own copy. For now we\'re working out of the master branch which the main branch that everyone will eventually merge their code into. If you want more explaination, please take <a href="https://frontendmasters.com/courses/git-in-depth/">Nina\'s class</a>.</p>\n<h3 id="messing-around-with-github"><a href="#messing-around-with-github" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Messing around with GitHub</h3>\n<p>If you want to play around with GitHub, feel free to toy with <a href="https://github.com/btholt/pull-requests">my pull-requests</a> repo. It\'s there so you can fork it, file issues, and open pull requests to your heart\'s content.</p>\n<h3 id="your-projects"><a href="#your-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Your Projects</h3>\n<p>You\'ve made two projects so far: the calculator and the News Times site. Put both of these up on GitHub in their own repos.</p>',frontmatter:{path:"/git-and-bash",title:"Git and Bash",order:18}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",
title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---git-and-bash-0dc21408453f9dc1bbad.js.map