# 401k Calculator
A calculator for computing how much you earn from 401k after you leave the US.

> This is an expermental project, it might be not correct in some places, please feel free to send a PR to fix it.

The hypothesis of this calculator is based on you will leave the US after working in the US for *n* years, and you wanna withdraw the money that is put in your 401k account. The most wise way is storing your money in **traditional pre-tax 401k** and pay tax when withdrawing it.

## Why Traditional pre-tax 401k is better?

After moving back to your country, you would not have any salary or not as much as before. Thus, you would have chance to choose lower federal tax rate. Besides, you will not be a resident in any state, so you can waive the state tax. That definitely would decrease your tax loss compare with *Roth 401k*.

## Formula

**Rate**: I suppose your balance in a bank has `4%` compound interest rate.

**Penalty**: If you wanna withdraw your 401k before *59* years old. You need to pay `10%` pentaly.

**Tax**: The minimal federal tax rate `10%` for individual income in 2017.

**WithdrawPerYear**: The minimal individual income bracket `USD$ 18650` in 2017 tax year for married with *10%* tax rate. We would withdraw `USD$ 18650` per year after leaving the US.

**SaveWithout401k**: In 2017, the federal rate plus state rate for married whose income is from *USD $91,900* to *USD $191,650* is `28% + 9.3%`.

**Employer contribution**: The employer contribution rate is based on your base yearly salary.

**Years**: Years after leaving the US, you have withdrawed all of your 401k balance.