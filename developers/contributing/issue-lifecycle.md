---
title: Understanding the Lifecycle of an Issue at KodaDot
head:
  - - meta
    - name: description
      content: This guide provides insight into how issues are managed at KodaDot, from reporting an issue, working on it, to creating a PR and the peer review process. It also mentions the role of KodaBot and the Code Review Guild.
---


# Understanding the Lifecycle of an Issue at KodaDot

Understanding the lifecycle of an issue at KodaDot is pivotal for both users reporting issues and developers working to resolve them. This guide aims to provide an in-depth insight into how problems and feature requests are managed at KodaDot, detailing the journey an issue takes from report to resolution.


## Reporting an Issue

Active feedback collection from our community is vital to us, and we encourage users to utilize our GitHub repository's reporting system. Upon creating a new issue, users are asked to select one of three templates designed to aid in articulating their problems or ideas in a structured manner. This not only eases the issue creation process but also facilitates developers in better triaging a specific bug or security vulnerability.

![Issue1](/assets/issue1.webp)

### Issue Templates

- **Bug report**: Utilize this template to report a software bug that you've discovered.

Once the ticket is created, it can be tagged to quickly provide developers with context without them having to open the tasks. Through this tag system, we also disclose which issues are eligible for bounties. We use specific tags ranging from "p1" to "p5" for prioritization. "P1" signals urgent and critical problems, while "p5" is used for tasks that are more experimental and research-heavy.

![Issue2](/assets/issue2.webp)


## Assigning and Working on an Issue

Our in-house KodaBot automatically assigns the issue to the commenter and subsequently locks the issue for a predefined number of hours (`bountyTimes = { $: 24, $$: 48, $$$: 72, $$$$: 96, $$$$$: 120}`). If the current assignee can't solve the task within the given timeframe, it is reopened for others to claim.

![Issue3](/assets/issue3.webp)


## Creating a Pull Request (PR)

To submit a solution, contributors need to fork the project and then create a PR against the main branch of the original repository. We provide a template to ensure a clearly understandable and structured PR, including a brief summary, screenshots, and example links so that reviewers can quickly assess and test the proposed changes.

During filling out the template, contributors are asked to reference the respective issue and fill out their KSM address. This allows for the automatic closure of the issue after the PR has been merged and provides the payment bot with a destination for the bounty payout (upon completion, the 'paid' label is applied).

![Issue4](/assets/issue4.webp)


## Peer Review

Peer review is an integral part of our workflow, ensuring high code quality standards and allowing contributors to give their perspective on the requested changes. Once a peer review is done and the reviewer requests no further changes, the PR can be approved and merged into the main branch. After the successful merge, the referenced issue is automatically closed and can therefore be considered as completed.

![Issue5](/assets/issue5.webp)

## Code Review Guild

Recently, we introduced a code review guild responsible for reviewing most emerging PRs. The guild consists of frequent contributors who have proven to be reliable and trustworthy parts of the community. Guild members can trigger payouts and merge PRs into the main branch. This initiative not only relieves the project founders of a substantial workload but also accelerates development and iteration cycles.

We're currently discussing funneling additional funding towards the review guild to reward and further incentivize the initiative of each member.

Through this process, we aim to provide a smooth, efficient, and effective issue resolution mechanism that benefits both users and developers alike. Your contributions are vital to the success of KodaDot, and we appreciate your continuous support and understanding of our workflow.


---

This page has been largely possible because of Kilian Kukelka article on [Culture at KodaDot](https://blog.kodadot.xyz/contributor-culture-at-kodadot-665243d3d6a6), if you want to know more, go check it out!
