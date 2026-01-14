---
sidebar_position: 1
---

# Chapter 7: Sharding and Index Partitioning

*Learn how to scale search horizontally using shard design, routing strategies, and segment-aware partitioning.*

## Chapter Overview

When a single node can no longer handle your data volume or query load, horizontal scaling through sharding becomes essential. This chapter covers shard design strategies, routing mechanisms, and the trade-offs involved in partitioning your index across multiple nodes.

Understanding sharding is fundamental to building search systems that scale with your data and traffic.

## 7.1 Horizontal Scaling Strategies

**7.1.1** Fixed vs. dynamic sharding

**7.1.2** Replication and high availability

## 7.2 Shard Routing and Distribution

**7.2.1** Consistent hashing and routing tables

**7.2.2** Balancing load and data distribution

## 7.3 Segment Locality and Optimization

**7.3.1** Segment affinity and cache efficiency

**7.3.2** Reducing cross-shard reads

**7.3.3** Rebalancing and resharding impacts

## Examples

*Examples coming soon.*

Code examples for this chapter will demonstrate shard configuration, routing strategies, and rebalancing operations with Lucenia clusters.
