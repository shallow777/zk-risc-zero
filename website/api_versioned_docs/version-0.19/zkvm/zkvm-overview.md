---
sidebar_position: 2
slug: ./
---

# zkVM Overview

> WARNING: This software is still experimental, we do not recommend it for production use.

_If you're ready to start building, check out our [zkVM Quick Start] and our [zkVM example applications]._

The RISC Zero zero-knowledge virtual machine (zkVM) lets you [prove] correct execution of arbitrary Rust code.
By allowing users to build zero-knowledge applications that **leverage existing Rust packages**, the RISC Zero zkVM makes it quick and easy to build powerful verifiable software applications.
Our demos show how to:

- use chess crates to [prove mate-in-one]
- use JSON crate to make [proofs about private data]
- use JPG crates to [prove you can find Waldo]
- use Rust-Ethereum crates like [revm], [ethers], and [alloy] to **[prove correct construction of Ethereum blocks]**.

On any other proving platform, building any of these projects requires starting from the ground up.
By letting developers use the primitives they need, the RISC Zero zkVM makes verifiable software development a practical reality for projects of all scales.

We're focused on delivering a first-class developer experience together with first-class performance.
We offer an open-source prover that can prove computations of any size on standard consumer hardware, and we make it easy to request/receive proofs remotely with [Bonsai].

The documentation on this site will teach you how to write software for the RISC Zero zkVM, how to use the zkVM to generate proofs on your own machine, and how to use Bonsai for remote proof generation.

### [`zkvM Quick Start`]

## Building a zkVM Application

The core of a zkVM application is the [guest program].
The guest program is the part of the application that gets proven.

To prove correct execution of the [guest program]:

1. The [guest program] is compiled to an [ELF binary]. <br/>
2. The [executor] runs the [ELF binary] and records the [session].
3. The [prover] checks and proves the validity of the [session], outputting a [receipt].

> **Note:** You only need to worry about the details of step 2 & step 3 if you're running the zkVM on your own hardware.
> See [Host Code 101] for more details on these steps.
> If you're using [Bonsai] for remote proving, you won't need to write host code.

![From Guest Code to Receipt](/diagrams/from-rust-to-receipt.png)

Anyone with a copy of the [receipt] can [verify] the [guest program]'s execution and read its [publicly shared outputs].
The verification algorithm receives an [ImageID] as a parameter; the ImageID serves as a cryptographic identifier for the expected ELF binary.

## Deploying a zkVM Application

Once you've built a zkVM application, you can generate proofs on your own machine(s) or you can make requests to [Bonsai] to generate proofs as needed.

For local proof generation, we recommend a machine with at least 16GB of RAM.
Options for generating proofs using GPU acceleration and skipping proof generation are documented in the [feature flags].

## Micro Architecture

The zkVM is a verifiable computer that works like a real embedded RISC-V micro-processor. This enables developers to more easily develop zk powerful applications.

### Continuations for limitless computations

Continuations allow the [zkVM][zkVM-term] to do large computations by splitting the work into small, independent [segments] of the same size.
This enables proofs generation on commodity hardware and makes zero knowledge computing widely accessible. To learn more, read the article on [continuations].

## Next Steps

_Ready to start building zkVM applications?_ <br/>
Check out [zkVM Quickstart](quickstart.md) & [Guest Code 101](developer-guide/guest-code-101.md).

_Want to browse some demos?_ <br/>
Check out the [zkVM example applications].

_Curious about performance?_ <br/>
Check the [performance benchmarks] page.

_Looking for information about blockchain integration?_ <br/>
Check out [Bonsai].

_Curious about Zeth?_<br/>
Read the [article](https://risczero.com/news/zeth-release).

[`zkVM Quick Start`]: ./quickstart.md
[alloy]: https://github.com/alloy-rs
[Bonsai]: ../bonsai/bonsai-overview.md
[continuations]: https://www.risczero.com/news/continuations
[ELF binary]: /terminology#elf-binary
[ethers]: https://github.com/ethers-io/ethers.js
[executor]: /terminology#executor
[feature flags]: https://github.com/risc0/risc0#feature-flags
[guest program]: developer-guide/guest-code-101.md
[Host Code 101]: developer-guide/host-code-101.md
[imageID]: /terminology#image-id
[performance benchmarks]: benchmarks.md
[proofs about private data]: https://github.com/risc0/risc0/tree/release-0.19/examples/json#json-example
[prove]: /terminology#validity-proof
[prove correct construction of Ethereum blocks]: https://risczero.com/news/zeth-release
[prove mate-in-one]: https://github.com/risc0/risc0/tree/release-0.19/examples/chess#zk-checkmate
[prove you can find Waldo]: https://www.risczero.com/news/waldo
[prover]: /terminology#prover
[publicly shared outputs]: /terminology#journal
[receipt]: developer-guide/receipts.md
[revm]: https://github.com/bluealloy/revm
[segments]: /terminology#segment
[session]: /terminology#session
[verify]: /terminology#verify
[zkVM example applications]: https://github.com/risc0/risc0/tree/release-0.19/examples
[zkVM Quick Start]: ./quickstart.md
[zkVM-term]: /terminology#zero-knowledge-virtual-machine-zkvm
