# Markdown link manager

[gb]: https://toolchain.gitbook.com/
[mkd]: https://www.mkdocs.org/


This lib is trying to solve a very specific case:  

You want to host a set of markdown docs like this very [wiki](./wiki) and **additionally** want to use a static generator like [GitBook][gb] or [MkDocs][mkd] to create a different presentation of the documentation.  

Typically the only thing that stands in the way of this is the different style of the links required.  

* When you host your wiki i.e on github you want to use relative links between your docs: `[About](./docs/about)`
* But your static generator might want it to be absolute like `[About](/docs/about)` or use .md ending `[About](/docs/about.md) `

| Type | Link | Github wiki | MkDocs | GitBook |
| ---- | ---- |:-----------:|:------:|:-------:|
| Absolute | [About](/about) | X | V | X |
| Relative | [About](./about) | V | X | X |
| .md | [About](./about.md) | X | X | V |

[Index](/testdocs/index)
![Foo](./testdocs/images/foo.jpg)
